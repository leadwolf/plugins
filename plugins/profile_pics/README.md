## profile_pics 1.1.0

by boi123212321, john4valor

Find actor images based on local files. GIF support.

### Arguments

| Name        | Type   | Required | Description                              |
| ----------- | ------ | -------- | ---------------------------------------- |
| path_thumb  | String | true     | Folder to search thumbnail images in     |
| path_alt    | String | true     | Folder to search alt thumbnail images in |
| path_avatar | String | true     | Folder to search avatar images in        |
| path_hero   | String | true     | Folder to search hero images in          |

### Example installation with default arguments

`config.json`
```json
---
{
  "plugins": {
    "register": {
      "profile_pics": {
        "path": "./plugins/profile_pics/main.ts",
        "args": {
          "path_thumb": null,
          "path_alt": null,
          "path_avatar": null,
          "path_hero": null
        }
      }
    },
    "events": {
      "actorCreated": [
        "profile_pics"
      ]
    }
  }
}
---
```

`config.yaml`
```yaml
---
plugins:
  register:
    profile_pics:
      path: ./plugins/profile_pics/main.ts
      args:
        path_thumb: null
        path_alt: null
        path_avatar: null
        path_hero: null
  events:
    actorCreated:
      - profile_pics

---
```
