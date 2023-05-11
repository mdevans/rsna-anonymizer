module.exports = {
  packagerConfig: {
    icon: 'assets/icons/rsna',
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {
    //     setupIcon: 'assets/icons/rsna.ico',
    //   },
    // },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'windows'],
    },
    // {
    //   name: '@electron-forge/maker-deb',
    //   config: {},
    // },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mdevans',
          name: 'rsna-anonymizer'
        },
        prerelease: true
      }
    }
  ]
};
