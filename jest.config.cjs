// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@polkadot/api-(augment|base|contract|derive)(.*)$': '<rootDir>/packages/api-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@polkadot/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@polkadot/rpc-(augment|core|provider)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@polkadot/typegen(.*)$': '<rootDir>/packages/typegen/src/$1',
    '@polkadot/types-(augment|codec|create|known|support)(.*)$': '<rootDir>/packages/types-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@polkadot/types(.*)$': '<rootDir>/packages/types/src/$1'
  },
  "transformIgnorePatterns": [
    '/node_modules/(?!@polkadot|@substrate/connect|@babel/runtime/helpers/esm/)'
  ],
  testTimeout: 30000
};
