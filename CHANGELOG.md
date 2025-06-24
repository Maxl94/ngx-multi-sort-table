# Changelog

## [20.0.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v19.2.1...v20.0.0) (2025-06-24)


### ⚠ BREAKING CHANGES

* update Angular dependencies to version 20 and adjust module resolution settings ([#232](https://github.com/Maxl94/ngx-multi-sort-table/issues/232))

### Miscellaneous Chores

* update Angular dependencies to version 20 and adjust module resolution settings ([#232](https://github.com/Maxl94/ngx-multi-sort-table/issues/232)) ([65fce7d](https://github.com/Maxl94/ngx-multi-sort-table/commit/65fce7d32918d23b91d3f723d20f06ca520ceb10))

## [19.2.1](https://github.com/Maxl94/ngx-multi-sort-table/compare/v19.2.0...v19.2.1) (2025-05-26)


### Bug Fixes

* make MatMultiSortTableSettingsComponent generic for improved type safety ([#229](https://github.com/Maxl94/ngx-multi-sort-table/issues/229)) ([2f35469](https://github.com/Maxl94/ngx-multi-sort-table/commit/2f35469e15cef3403e4ef07aad11ce9fa6c553fd))

## [19.2.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v19.1.1...v19.2.0) (2025-05-16)


### Features

* add missing Angular animations module and improve localStorage handling ([#224](https://github.com/Maxl94/ngx-multi-sort-table/issues/224)) ([87f80b1](https://github.com/Maxl94/ngx-multi-sort-table/commit/87f80b11d15c97b31683dd27549709922da70a38))
* add option to disable sort indicators in multi-sort table settings ([#227](https://github.com/Maxl94/ngx-multi-sort-table/issues/227)) ([2c03735](https://github.com/Maxl94/ngx-multi-sort-table/commit/2c03735e0811eb884fc119ce3b1521850c69064f))


### Bug Fixes

* handle update sorting and cancel events correctly ([#228](https://github.com/Maxl94/ngx-multi-sort-table/issues/228)) ([7a23235](https://github.com/Maxl94/ngx-multi-sort-table/commit/7a23235dc5e268f204e1b70ece885a5020ac2b80))

## [19.1.1](https://github.com/Maxl94/ngx-multi-sort-table/compare/v19.1.0...v19.1.1) (2025-02-24)


### Bug Fixes

* Update column names on initialization ([#215](https://github.com/Maxl94/ngx-multi-sort-table/issues/215)) ([586b679](https://github.com/Maxl94/ngx-multi-sort-table/commit/586b6795c48958937fef8bdcfce89f75be81ae7a))

## [19.0.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v18.0.0...v19.0.0) (2025-02-14)


### ⚠ BREAKING CHANGES

* Upgrade to Angular 19 and Material 19

### Features

* Upgrade to Angular 19 and Material 19 ([dbd30b9](https://github.com/Maxl94/ngx-multi-sort-table/commit/dbd30b94d56a584249a25135d0de4e054f050dd5))

## [18.0.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v17.1.2...v18.0.0) (2024-05-28)


### ⚠ BREAKING CHANGES

* Upgrade to Angular 18 and Material 18 ([#197](https://github.com/Maxl94/ngx-multi-sort-table/issues/197))

### Features

* Upgrade to Angular 18 and Material 18 ([#197](https://github.com/Maxl94/ngx-multi-sort-table/issues/197)) ([0c85639](https://github.com/Maxl94/ngx-multi-sort-table/commit/0c856394359812bc50398830fb65bb01237d33c6))

## [17.1.2](https://github.com/Maxl94/ngx-multi-sort-table/compare/v17.1.1...v17.1.2) (2024-05-16)


### Bug Fixes

* table not loading when sort params are provided ([#194](https://github.com/Maxl94/ngx-multi-sort-table/issues/194)) ([fc07c11](https://github.com/Maxl94/ngx-multi-sort-table/commit/fc07c111322ee58de0dcabbffd92db830a32010e))

## [17.1.1](https://github.com/Maxl94/ngx-multi-sort-table/compare/v17.1.0...v17.1.1) (2024-05-15)


### Bug Fixes

* visibility of displayed columns after loading settings from local storage ([#192](https://github.com/Maxl94/ngx-multi-sort-table/issues/192)) ([fff269e](https://github.com/Maxl94/ngx-multi-sort-table/commit/fff269ea46adee41705e8236a060d9f68b3cdd79))

## [17.1.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v17.0.2...v17.1.0) (2024-02-21)


### Features

* use only 6 dots icon as a drag handle for table menu ([9aba71e](https://github.com/Maxl94/ngx-multi-sort-table/commit/9aba71ebb74307b39bbeedb0a7e686758a21153e))


### Bug Fixes

* next observable not fired on page index 0 ([#182](https://github.com/Maxl94/ngx-multi-sort-table/issues/182)) ([70c3311](https://github.com/Maxl94/ngx-multi-sort-table/commit/70c33114d6e9385c9633ceb1185dd2a1a52bfb39))

## [17.0.2](https://github.com/Maxl94/ngx-multi-sort-table/compare/v17.0.1...v17.0.2) (2024-02-19)


### Bug Fixes

* **ci:** set correct package name for build ([2f8c793](https://github.com/Maxl94/ngx-multi-sort-table/commit/2f8c79323f83ebfb6bd3f22c7863ed731b081f0d))

## [17.0.1](https://github.com/Maxl94/ngx-multi-sort-table/compare/v17.0.0...v17.0.1) (2024-02-19)


### Bug Fixes

* updates docs, test release please (171) ([8a74311](https://github.com/Maxl94/ngx-multi-sort-table/commit/8a7431159d7dde56f340cbd04c5f8becbd840397))

## [17.0.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v16.0.2...v17.0.0) (2024-01-10)


### ⚠ BREAKING CHANGES

* removing init console log, that serves no purpose in a production release
* More type cleanup to enable tsconfig strict=true
* moving tsconfig to strict since this is the default in angular projects
* migration angular material components and styles to newer offerings in angular 17

### Features

* moving tsconfig to strict since this is the default in angular projects ([f4683d1](https://github.com/Maxl94/ngx-multi-sort-table/commit/f4683d1c1faf7b1a6cc3afed9311d0303271aee2))


### Miscellaneous Chores

* migration angular material components and styles to newer offerings in angular 17 ([f4683d1](https://github.com/Maxl94/ngx-multi-sort-table/commit/f4683d1c1faf7b1a6cc3afed9311d0303271aee2))
* More type cleanup to enable tsconfig strict=true ([912aab0](https://github.com/Maxl94/ngx-multi-sort-table/commit/912aab0673b0881b2dbeadb9c2913270596d8ce6))
* removing init console log, that serves no purpose in a production release ([44bb1d9](https://github.com/Maxl94/ngx-multi-sort-table/commit/44bb1d925a6b962636a7d6cebaa8a6d95325e6c2))

## [16.0.2](https://github.com/Maxl94/ngx-multi-sort-table/compare/v16.0.1...v16.0.2) (2023-09-07)


### Bug Fixes

* **deps:** corrects dependency version for material and cdk ([#155](https://github.com/Maxl94/ngx-multi-sort-table/issues/155)) ([2778962](https://github.com/Maxl94/ngx-multi-sort-table/commit/27789621cd77718cddb39e9d8a04c49de2b7c922))

## [16.0.1](https://github.com/Maxl94/ngx-multi-sort-table/compare/v16.0.0...v16.0.1) (2023-09-07)


### Bug Fixes

* **docs:** updates readme ([e02540b](https://github.com/Maxl94/ngx-multi-sort-table/commit/e02540b144c3a890113c6203b727d5475d021514))

## [16.0.0](https://github.com/Maxl94/ngx-multi-sort-table/compare/v1.0.0...v16.0.0) (2023-09-07)


### Bug Fixes

* trigger release ([36b3b84](https://github.com/Maxl94/ngx-multi-sort-table/commit/36b3b84c1a5bb5d927d12fdeffcb76fa21017b9e))
