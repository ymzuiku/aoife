# Aoife Doc

> Aoife Doc 是一个极简的 Markdown 运行时 markdown 文档工具

不需要配置编译的工程，只需编写 html 和 JSON 配置，引入 JS，即可完成 markdown 文档配置。

[查看 Demo](https://aoife-doc.writeflowy.com)

# 使用

我们使用命令行创建一个工程

```bash
$ npx aoife-doc my-document
```

在工程内已创建以下 md.json, index.html 2 个文件, 和一个包含若干个 .md 文件的文件夹：

```
- md.json
- index.html
- md/
  - hello.md
  - world.md
```

## 编写 JSON 配置文件

其中 md.json 的内容如下:

```json
{
  "title": "The Aoife Example",
  "version": "1.0.0",
  "path": "/markdown/",
  "files": ["hello", "world"]
}
```

我们一个个字段解释：

- title 指文档的标题
- version 指文档的版本，在后续读取 .md 文件时，会根据版本进行缓存
- path 指需要读取的 markdown 文档的文件夹路径
- files 指需要读取的 markdown 文档的文件路径，可以解析多个 .md 文件，根据自行的需要排序

## 预览

我们借助 serve 启动一个本地静态服务， 然后打开 `http://localhost:5000/` 即可访问文档

```bash
$ npx serve -s ./
```

## 部署

将工程文件拷贝到服务端或其 github.io 即可
