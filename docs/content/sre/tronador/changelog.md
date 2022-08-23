# Changelog

## v0.1.x

**v0.1.6**

- feat: add support for default Secrets (orgLevelSecrets) in TronadorConfig CR

**v0.1.5**

- fix: remove empty secret being added to GitRepository CR for public repo

**v0.1.4**

- fix: fix name of GitRepository resource referenced in HelmRelease object created by Tronador

**v0.1.3**

- feat: add unique error message if tronador config exists but has no spec

**v0.1.2**

- refactor: restructure tronador config, see [relevant docs](./config_file.html) for more details
- refactor: all secrets management is now done via this new TronadorConfig CR.
- feat: faster deletion of tronador config
- fix: fix crash when tronador config exists without a spec
- fix: fix helm chart failing if `env.showErrorTrace` is set

**v0.1.1**

- fix: add relevant rbac
- feat: double the default memory limit

**v0.1.0**

- refactor: update Tronador's `v1alpha1/EnvironmentProvisioner` to `v1alpha2/Environment`, see [relevant docs](./environment.html) for more details about spec changes
  - feat: faster provisioning of DTEs
  - feat: much faster deletion of DTE on deletion of CR
  - fix: fix all instances of an error that prevented DTE deletion
  - feat: delete existing `EnvironmentProvisioner` DTE and create one using `Environment` on install
  - feat: create `GitRepository` and `v2beta1/HelmRelease` objects of flux2 for DTE creation instead of `v1/HelmRelease` object
-  feat: add `env.showErrorTrace` variable in HelmRelease of Tronador to enable/disable error trace when error is thrown in the controller
- feat: better reconcile strategy for `Environment` to prevent unnecessary reconciles
- feat: much better handling of status messages in `Environment`
- feat: better automated testing

## v0.0.x

**v0.0.13**

- feat: added different reconciliation times depending on the status of DTE's HelmRelease
- fix: fix for HelmRelease get request

**v0.0.12**

- fix: fix for kubebuilder lib which displayed logs timer in unix format

**v0.0.11**

- fix: fix for clusterrolebinding in chart templates

**v0.0.10**

- fix: fix a bug that didn't grant tronador access to create custom resources

**v0.0.9**

- feat: added support for TronadorConfig. Resources required in DTEs can now be created by mentioning them in tronador config

**v0.0.8**

- fix: fix a bug that prevented deletion of EnvironmentProvisioner resources

**v0.0.7**

- fix: deletion handled for helm release object created by Tronador

**v0.0.6**

- fix: fix name for generated helm release to conform to kubernetes resource name standards

**v0.0.5**

- fix: fix a permission issue in rolebinding

**v0.0.4**

- feat: added ability to set labels for the provisioned namespace

**v0.0.3**

- refactor: remove git auth and TronadorConfig object
- refactor: remove unused dependencies
- fix: Application and HelmRelease are now required fields for EnvironmentProvisioner
- fix: HelmRelease creation and updation
- feat: added more error handling

**v0.0.2**

- fix: fix leader election role in chart

**v0.0.1**

- initial release
