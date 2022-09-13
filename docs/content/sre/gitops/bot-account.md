# Bot Account Permissions

Stakater bot account will need following permissions:

## 1. GitOps Repository

Bot account needs `admin` permission in GitOps repository as it's going to push to default branch of GitOps repository. Bot account is used by Tekton pipeline and push changes in GitOps repository.

Default branch of repository is usually protected. In order to make any change to GitOps repository, developers will have to make PR and merge it to default branch. Bot account need to have `admin` permission to by pass this rule

## 2. Application Repository

Bot account needs `write` permission in application repository. As bot account is used by Tekton pipeline, pipeline bump tag version at the end of successful execution. To push tag to application repository, bot account need to have `write` permission there.
