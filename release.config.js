module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git'
  ],
  repositoryUrl: 'https://github.com/usuario/repo', // Cambia esto por la URL de tu repositorio
  preset: 'angular',
  release: {
    branches: ['main']
  }
};
