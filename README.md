licedate
===============

Command-line license date updater.

```bash
$ npm install -g licedate
```

## Usage 

To update the license in your current directory (if it's named either `LICENSE.txt` or `LICENSE`), use the following command:

```bash
$ licedate
```

This will update your license file automatically. Yes, it's that simple.

If your file is named something other than `LICENSE.txt` or `LICENSE`, the command is the following:

```bash
$ licedate <file>
```

where `<file>` is your filename, e.g. `licedate license.txt`.

## License

MIT
