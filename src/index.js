// @flow

import packageJson from 'package-json';
import semver from 'semver';

/**
 * Finds versions of pkgName that work with given peers.
 * Given extra peers that the package does not require at all are considered to be compatible.
 *
 * @param pkgName The package to search for.
 * @param peers The peers that found versions need to be compatible with,
 * formatted like a regular peer dependency object literal.
 * Versions must be exact, ranges are not supported.
 * @returns {Promise<string[]>} The versions of the package that work with given peers.
 * @example
 * peerCompatible('some-component-lib', { 'some-framework-core-lib': '1.0.0' })
 *   .then(versions => console.log(versions));
 */
export default async function peerCompatible(
  pkgName: string,
  peers: { [string]: string },
): Promise<string[]> {
  const pkg = await packageJson(pkgName, { allVersions: true });
  return Object.keys(pkg.versions).filter(version => {
    const peerDeps = pkg.versions[version].peerDependencies;
    return Object.keys(peers).every(peer => {
      if (peerDeps[peer]) return semver.satisfies(peers[peer], peerDeps[peer]);
      return true;
    });
  });
}
