# Run this script in an elevated command shell, using 'Run as Administator'

$title = "Execute Installation Script"
$message = "Absolutely NO WARRANTIES or GUARANTEES are provided. Are you sure you want to continue?"

$yes = New-Object System.Management.Automation.Host.ChoiceDescription "&Yes", `
    "Execute script."

$no = New-Object System.Management.Automation.Host.ChoiceDescription "&No", `
    "Do not execute script."

$options = [System.Management.Automation.Host.ChoiceDescription[]]($yes, $no)

$result = $host.ui.PromptForChoice($title, $message, $options, 1)

switch ($result)
    {
        0 {
            Write-Output "Note: This script assumes a clean environment and therefore is not resilient."
            Write-Output "Installing chocolatey"
            Set-ExecutionPolicy AllSigned; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

            RefreshEnv.cmd

            Write-Output "Installing Git & GitHub Desktop"
            choco install git github-desktop -y
            Write-Output "Verify installation of GitHub Desktop manually."

            Write-Output "Installing JDK8"
            choco install jdk8 -y

            Write-Output "Installing NodeJS"
            choco install nodejs -y

            Write-Output "Installing VS Code"
            choco install VisualStudioCode -y
            Write-Output "Verify installation of VS Code manually."

            RefreshEnv.cmd

            Write-Output "Installing Angular CLI"
            npm install -g @angular/cli

            Write-Output "Installing Angular devkit"
            npm install -g --save-dev @angular-devkit/build-angular

        }
    1 {"Aborted."}
}
