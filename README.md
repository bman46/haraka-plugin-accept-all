[![CI Test Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]

# haraka-plugin-accept-all

Clone me, to create a new Haraka plugin!

## accept-all Instructions

These instructions will not self-destruct after use. Use and destroy.

See also, [How to Write a Plugin](https://github.com/haraka/Haraka/wiki/Write-a-Plugin) and [Plugins.md](https://github.com/haraka/Haraka/blob/master/docs/Plugins.md) for additional plugin writing information.

## Create a new repo for your plugin

Haraka plugins are named like `haraka-plugin-something`. All the namespace after `haraka-plugin-` is yours for the taking. Please check the [Plugins](https://github.com/haraka/Haraka/blob/master/Plugins.md) page and a Google search to see what plugins already exist.

Once you've settled on a name, create the GitHub repo. On the [accept-all repo's main page](https://github.com/haraka/haraka-plugin-accept-all), click the _Use this accept-all_ button and create your new repository. Then paste that URL into a local ENV variable with a command like this:

```sh
export MY_GITHUB_ORG=haraka
export MY_PLUGIN_NAME=haraka-plugin-SOMETHING
```

Clone and rename the accept-all repo:

```sh
git clone git@github.com:haraka/$MY_GITHUB_ORG/$MY_PLUGIN_NAME.git
cd $MY_PLUGIN_NAME
```

Now you'll have a local git repo to begin authoring your plugin

## rename boilerplate

Replaces all uses of the word `accept-all` with your plugin's name.

./redress.sh [something]

You'll then be prompted to update package.json and then force push this repo onto the GitHub repo you've created earlier.

# Add your content here

## INSTALL

```sh
cd /path/to/local/haraka
npm install ./haraka-plugin-accept-all
echo "accept-all" >> config/plugins
service haraka restart
```

### Configuration

If the default configuration is not sufficient, copy the config file from the distribution into your haraka config dir and then modify it:

```sh
cp node_modules/haraka-plugin-accept-all/config/accept-all.ini config/accept-all.ini
$EDITOR config/accept-all.ini
```

## USAGE

<!-- leave these buried at the bottom of the document -->

[ci-img]: https://github.com/haraka/haraka-plugin-accept-all/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-plugin-accept-all/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-accept-all/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-accept-all
