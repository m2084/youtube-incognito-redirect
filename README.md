# YouTube Auto-Incognito Redirect

This Chrome extension automatically opens eligible YouTube videos in an incognito window, preserving privacy and avoiding watch-history linkage without manual incognito switching. Useful for troubleshooting and testing. 

## Behavior

When a tab loads a YouTube watch URL:

```
https://www.youtube.com/watch
```

The extension checks that the URL contain:

- `watch` (default video address)
- `&t=` (timestamp)
- `&list=` (playlist)

Then procceeds to:

1. Open the video in an incognito window
2. Close the original normal-mode tab

The result is seamless, automatic private viewing.

## Installation (Developer Mode)

1. Clone or download this repository:

```bash
git clone https://github.com/<your-username>/<repo>.git
```

2. Open Chrome and visit:

```
chrome://extensions/
```

3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select this extension folder

## Required Chrome Setting

Chrome blocks incognito actions unless explicitly enabled.

After loading the extension:

1. Go to **Details** for this extension
2. Enable **Allow in incognito**

Without this, no redirects will occur.

## Privacy

- No telemetry
- No remote requests
- No personal data stored or transmitted
- All logic runs locally inside Chrome

## Browser Support

- Google Chrome (Manifest V3)
- Chromium-based browsers (Brave, Edge, Opera)

Functionality depends on each browser's incognito permissions.

## Contributing

Pull requests are welcome. Code must remain privacy-focused and compatible with Chrome Manifest V3 rules.

## License

MIT License. See `LICENSE` file.
