const SentryCli = require('@sentry/cli');
async function createReleaseAndUpload() {
  const release = process.env.REACT_APP_SENTRY_RELEASE;
  if (!release) {
    return;
  }
  console.log('Release version found', release);
  const cli = new SentryCli();
  try {
    await cli.releases.new(release);
    await cli.releases.uploadSourceMaps(release, {
      include: ['build/static/js'],
      urlPrefix: '~/static/js',
      rewrite: false,
    });
    await cli.releases.finalize(release);
    console.log('Released source map to sentry', release);
  } catch (e) {
    console.log('Sentry error', e);
  }
}
createReleaseAndUpload();
