# get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
# go up one level to the repo root
$repoRoot = Split-Path $scriptDir
# define the certs directory
$certsDir = Join-Path $repoRoot "certs"
# go to the certs directory
Set-Location $certsDir
# import the certificate to the trusted root store
certutil -addstore -f "Root" cert.pem
