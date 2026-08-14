$tools = @('tool-weekreview','tool-brightness','tool-studyplan','tool-tatami','tool-dogwalk','tool-kakeibo')
$root = 'C:\Users\Administrator\money'
$fail = 0
foreach ($t in $tools) {
    $path = Join-Path $root "$t.html"
    $html = Get-Content -Raw -Encoding UTF8 $path
    $m = [regex]::Match($html, '<script>(.*?)</script>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if (-not $m.Success) { Write-Output "$t : NO SCRIPT FOUND"; $fail++; continue }
    $js = $m.Groups[1].Value
    $out = Join-Path $env:TEMP ("chk_$t.js")
    Set-Content -Path $out -Value $js -Encoding UTF8
    $result = node --check $out 2>&1
    if ($LASTEXITCODE -eq 0) { Write-Output "$t : OK" } else { Write-Output "$t : FAIL"; Write-Output $result; $fail++ }
}
# common.js
$cjs = Get-Content -Raw -Encoding UTF8 (Join-Path $root 'assets\js\common.js')
$cjs = $cjs -replace '^\s*\/\*.*?\*\/', '' 
$cOut = Join-Path $env:TEMP 'chk_common.js'
Set-Content -Path $cOut -Value $cjs -Encoding UTF8
$r2 = node --check $cOut 2>&1
if ($LASTEXITCODE -eq 0) { Write-Output 'common.js : OK' } else { Write-Output 'common.js : FAIL'; Write-Output $r2; $fail++ }
Write-Output "FAILS=$fail"
