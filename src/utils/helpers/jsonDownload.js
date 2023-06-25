export default function handleDownload(elements) {
  const jsonData = JSON.stringify(elements, null, 2)
  const blob = new Blob([jsonData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'schema.json'
  link.click()
  URL.revokeObjectURL(url)
};

