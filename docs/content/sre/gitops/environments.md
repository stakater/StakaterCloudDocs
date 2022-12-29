# Environments

## Types of environments

There are three type of environments for each tenant:

1. Sandbox Environment
1. CI/CD Environments
2. Other Environments

### 1. Sandbox Environment

A dedicated namespace in cluster for developer in the cluster for every member of the specific tenant, that will also be preloaded with any selected templates and consume the same pool of resources from the tenants quota creating safe remote dev namespaces that teams can use as scratch namespace for rapid prototyping and development. So, every developer gets a Kubernetes-based cloud development environment that feel like working on localhost.

### 2. CI/CD Environments

There are three CI/CD environments per tenant

The CI/CD Environments are special Environments that are part of CI/CD workflow. There are 3 kind of CI/CD environments

#### 1. Build

Build environment contains all Tekton pipeline configurations/resources like *pipeline,eventlistener,pipelinrun etc*. These pipelines respond to changes in Application/Service source repositories. This environment is used for running pipelines of tenant applications.

#### 2. Preview

Preview environment contains all preview application deployments. As soon as there is a new PR in application, pipeline creates new environment to test this PR. Each PR is deployed in separate namespace.

#### 3. Development

Once the PR is merged; the dynamic test environment is automatically deleted and the Helm manifests are pushed to first permanent application environment i.e. `dev` by the CI pipeline.

### 3. Other Environments

Other than CI/CD environment there are applications environments like *qa,staging,pre-prod,prod etc*. Application promotion in other environments is done manually by creating a PR to the GitOps repo which includes the:

- bumping of the helm chart version in `Chart.yaml` and 
- bumping image tag version in helm values in `values.yaml`

## Application promotion

To promote application from one environment to another; as mentioned above you will need to bump chart version and image tag version in that environment. You can do so by picking these versions from previous environment. 

This guide assumes that application is already [on-boarded](../onboarding/application-onboarding.md) to different environments.

### 1. Promote chart

To promote application from one environment to another, you can check the chart version from `Chart.yaml` file from one environment and update version in `Chart.yaml` of next environment:

```
apiVersion: v2
dependencies:
  - name: <application-name>
    repository: <application-chart-repo>
    version: 1.0.51
description: A Helm chart for Kubernetes
name: <application-name>
version: 1.0.51
```

pick version `1.0.51` from above `Chart.yaml` and copy it in `Chart.yaml` of next environment

### 2. Promote image

To promote application from one environment to another, you can check the image tag version from `values.yaml` file from one environment and update version in `values.yaml` of next environment:

`<gitops-repo>/<tenant>/<application>/<env-1>/values.yaml`

```
<application-name>:
  application:
    deployment:
      image:
        repository: <application-docker-repo>
        tag: 1.0.51
```

Pick version `1.0.51` and paste it to next environment

`<gitops-repo>/<tenant>/<application>/<env-2>/values.yaml`

```
<application-name>:
  application:
    deployment:
      image:
        repository: <application-repo>
        tag: 1.0.50
```