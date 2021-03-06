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

az webpubsub create `
    -n $pubSubName `
    -g $rg `
    --sku Standard_S1 `
    --location $location `
    --unit-count 2


az webpubsub event-handler update `
    -n $pubSubName `
    -g $rg `
    --items '{""pubsub"": [{""urlTemplate"": ""http://"", ""systemEventPattern"": ""connect""}]}'