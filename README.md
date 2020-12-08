# Care Bear UI

### Setup
- Install dependencies: `yarn install`
- create a file `.env` in root directory, add a key `REACT_APP_VERIFICATION_TOKEN=<get_value_from_vault>`

### Local development
- Spin up the development server with `yarn start`

### Deployment
- run `npm run build` followed by `gcloud app deploy`. the file `app.yaml` tells app engine what to do from there.
