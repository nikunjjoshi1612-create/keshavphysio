import re

with open('src/data/physioData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

images = sorted(set(re.findall(r'image:\s*\"([^\"]+)\"', content)))
print("Unique images in physioData.ts:")
for img in images:
    print(img)
