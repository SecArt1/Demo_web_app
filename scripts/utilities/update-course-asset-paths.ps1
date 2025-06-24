# PowerShell script to update asset paths in all course HTML files
# Run this from the root directory of the project

$courseFiles = Get-ChildItem -Path "src\pages\courses\*.html" -File

foreach ($file in $courseFiles) {
    Write-Host "Updating asset paths in: $($file.Name)"
    
    $content = Get-Content $file.FullName -Raw
    
    # Update CSS paths
    $content = $content -replace 'href="assets/css/', 'href="../../../public/assets/css/'
    $content = $content -replace 'href="\.\.\/assets/css/', 'href="../../../public/assets/css/'
    $content = $content -replace 'href="\.\.\/\.\.\/assets/css/', 'href="../../../public/assets/css/'
    
    # Update JavaScript paths  
    $content = $content -replace 'src="assets/js/', 'src="../../../public/assets/js/'
    $content = $content -replace 'src="\.\.\/assets/js/', 'src="../../../public/assets/js/'
    $content = $content -replace 'src="\.\.\/\.\.\/assets/js/', 'src="../../../public/assets/js/'
    
    # Update image paths
    $content = $content -replace 'src="assets/photos/', 'src="../../../public/assets/images/'
    $content = $content -replace 'src="assets/images/', 'src="../../../public/assets/images/'
    $content = $content -replace 'src="\.\.\/assets/photos/', 'src="../../../public/assets/images/'
    $content = $content -replace 'src="\.\.\/assets/images/', 'src="../../../public/assets/images/'
    $content = $content -replace 'src="\.\.\/\.\.\/assets/photos/', 'src="../../../public/assets/images/'
    $content = $content -replace 'src="\.\.\/\.\.\/assets/images/', 'src="../../../public/assets/images/'
    
    # Update favicon paths
    $content = $content -replace 'href="assets/images/favicon.ico"', 'href="../../../public/assets/images/favicon.ico"'
    $content = $content -replace 'href="\.\.\/assets/images/favicon.ico"', 'href="../../../public/assets/images/favicon.ico"'
    $content = $content -replace 'href="\.\.\/\.\.\/assets/images/favicon.ico"', 'href="../../../public/assets/images/favicon.ico"'
    
    # Write the updated content back to the file
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    
    Write-Host "✅ Updated: $($file.Name)"
}

Write-Host ""
Write-Host "🎉 Asset path updates completed for all course files!"
Write-Host ""
Write-Host "Updated paths:"
Write-Host "  CSS: assets/css/ → ../../../public/assets/css/"
Write-Host "  JS:  assets/js/ → ../../../public/assets/js/"  
Write-Host "  IMG: assets/photos/ → ../../../public/assets/images/"
