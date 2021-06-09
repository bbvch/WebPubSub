# run 
# ```
# az login
# ```
# and
# ``` 
# az extension add --name webpubsub
# ```

. "$PSScriptRoot\constants.ps1"

az group create `
    --name $rg `
    --location $location

az eventhubs namespace create `
    -g $rg `
    -n $eventNamespace `
    --location $location

az eventhubs eventhub create `
    -n $eventHubName `
    -g $rg `
    --namespace-name $eventNamespace 