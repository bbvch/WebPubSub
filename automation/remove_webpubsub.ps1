# run 
# ```
# az login
# ```
# and
# ```
# az extension add --name webpubsub
# ```

. "$PSScriptRoot\constants.ps1"

az group delete `
    --name $rg `
    --location $location

az webpubsub delete `
    -n $pubSubName `
    -g $rg 