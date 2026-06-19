# Minimal static file server for previewing Augur.
# Roots at the parent "App TOW" folder so that ../unit_db.js resolves.
$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$port = 8787
$prefix = "http://localhost:$port/"

$mime = @{
  '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8';
  '.css'='text/css; charset=utf-8'; '.json'='application/json; charset=utf-8';
  '.svg'='image/svg+xml'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg';
  '.woff2'='font/woff2'; '.txt'='text/plain; charset=utf-8'; '.ico'='image/x-icon';
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Augur preview server on $prefix (root: $root)"

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    $path = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($path -eq '/' -or $path -eq '') {
      $res.StatusCode = 302
      $res.RedirectLocation = '/Augur/index.html'
      $res.Close()
      Write-Host "302 / -> /Augur/index.html"
      continue
    }
    $full = Join-Path $root ($path.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar))
    if (-not (Test-Path $full -PathType Leaf)) {
      $res.StatusCode = 404
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      $res.Close()
      Write-Host "404 $path"
      continue
    }
    $ext = [System.IO.Path]::GetExtension($full).ToLower()
    if ($mime.ContainsKey($ext)) { $res.ContentType = $mime[$ext] }
    $res.Headers.Add('Cache-Control', 'no-store, no-cache, must-revalidate')
    $bytes = [System.IO.File]::ReadAllBytes($full)
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
    $res.Close()
    Write-Host "200 $path ($($bytes.Length) bytes)"
  } catch {
    try { $res.StatusCode = 500; $res.Close() } catch {}
    Write-Host "500 $($_.Exception.Message)"
  }
}
