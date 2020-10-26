## resolution 0.0.1

by boi123212321

Add resolution labels to a scene

### Arguments

| Name        | Type     | Required | Description                                                                                         |
| ----------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |
| resolutions | number[] | false    | Resolutions to match against the scene's path, when the scene's metadata has not yet been extracted |

### Example installation with default arguments

`config.json`
```json
---
{
  "plugins": {
    "register": {
      "resolution": {
        "path": "./plugins/resolution/main.ts",
        "args": {
          "resolutions": []
        }
      }
    },
    "events": {
      "sceneCreated": [
        "resolution"
      ],
      "sceneCustom": [
        "resolution"
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
    resolution:
      path: ./plugins/resolution/main.ts
      args:
        resolutions: []
  events:
    sceneCreated:
      - resolution
    sceneCustom:
      - resolution

---
```
