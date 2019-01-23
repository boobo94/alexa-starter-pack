# Starter-Pack-Alexa-Skill
This is a Starter Pack skill for Amazon Alexa

# Setup before to start

Before everything you need to connect to your own skill and lambda function. For that please follow these instructions:

## `.ask/config`

1. Go to `.ask/config`
2. Modify on **line 4** the value of `skill_id` with your own skill id
3. Modify on **line 11** the value of `uri` with the id of your lambda function
4. Save

## `package.json`

1. Go in `package.json` from the root of the project
2. On **lines 12 and 14,15** Change the value of `--skill-id ` with your own skill id
3. Save

That's it... you can start the development now...

Good luck!

# How to run

To run the project you need to follow just two simple steps:

1. Go into the root of the project and run 

```bash
npm run serveo
```

Or Simply check [this](#local-development)

2. Go to the project and run

```bash
npm start
```

# Deployment

**ASK CLI** will create the skill and the Lambda function for you.
```bash
$ ask deploy
```

### Set up new `ask profile`

Follow [this](https://developer.amazon.com/docs/smapi/set-up-credentials-for-an-amazon-web-services-account.html) guide
If you get the error with no existing `~/.aws/config` file, run 

```bash
touch ~/.aws/config
```

# Local development

In order to develop locally and see your changes reflected instantly, you will need to create an SSH tunnel or expose somehow your local development server. There are several services that allow you to do this, for example [ngrok](https://ngrok.com/) or [serveo.net](https://serveo.net/).

## Using servo.net


1. You need to have an SSH client installed, then simply run

```bash
$ ssh -R 80:localhost:3000 serveo.net
Forwarding HTTP traffic from [https://YOUR_URL]
Press g to start a GUI session and ctrl-c to quit.
```

2. Once you see the URL, copy it and go to your Skill console.

3. Open the `Endpoint` menu and select `HTTPS`

4. Under `Default Region` paste the previous URL you copied.

5. On the select box choose: `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`.

6. Run `npm start` to start the local server and begin testing the skill.

That's it.

## Using [ngrok](https://ngrok.com/download)

1. Install [ngrok](https://ngrok.com/download)

2. Run `ngrok http 3000`

3. Copy the URL and follow the same steps above from 3 to 6.

# NPM Scripts

Frequently used `npm script`s:

| Script name   | Description |
|---------------|-------------|
| `clean`       | Remove the dist folder |
| `build`       | Create a build into dist folder, the code transpiled is compatible with Node 8.1 |
| `start`       | Runs the service locally, watching after changes |
| `serveo`      | Create a ssh tunnel to be able to link the skill to your local environment |
| `deploy`      | Deploy dist folder to lambda function |
| `get:skill`   | Sync skill manifest with the local file |
| `get:models`  | Sync models with the local files |

