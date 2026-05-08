param(
  [string]$Username
)

$ErrorActionPreference = "Stop"

Set-Location (Split-Path -Parent $PSScriptRoot)

if ($Username) {
  & npm run update:letterboxd -- $Username
} else {
  & npm run update:letterboxd
}

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

$targetFile = "src/data/favorite-films.json"

if ((git diff --quiet -- $targetFile), (git diff --cached --quiet -- $targetFile) -contains $false) {
  git add $targetFile

  Write-Host ""
  Write-Host "Staged changes for ${targetFile}:" -ForegroundColor Yellow
  git diff --cached -- $targetFile
} else {
  Write-Host ""
  Write-Host "No changes detected in $targetFile." -ForegroundColor Green
}
