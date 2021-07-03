# Instructions for creating new font

- Input file must contain the font name and alphanumeric characters in the following format:

```txt
name: [font_name]
[A-Z][a-z][0-1]
```

### example:

```
name: asian_script

卂 乃 匚 ᗪ 乇 千 Ꮆ 卄 丨 ﾌ Ҝ ㄥ 爪 几 ㄖ 卩 Ɋ 尺 丂 ㄒ ㄩ ᐯ 山 乂 ㄚ 乙 卂 乃 匚 ᗪ 乇 千 Ꮆ 卄 丨 ﾌ Ҝ ㄥ 爪 几 ㄖ 卩 Ɋ 尺 丂 ㄒ ㄩ ᐯ 山 乂 ㄚ 乙 0 1 2 3 4 5 6 7 8 9
```

Nothing else just exact two line. One line for name one line for characters. An extra line possible between them like above!

- name must be variable friendly & snake cased not camel cased
- Fonts characters must be separated by a space.

### Then run the script with:

```sh
yarn addNewFont
```

After a successful run,

- input file will be cleared
- a new json property will get pushed in fonts.json
- appropriate function & unit test for the new font will be created in the byproduct file. (saves you lot of time!)

Any required tweaks/fix for the new property must be done manually.
