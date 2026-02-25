import os
import re

directories_to_scan = [
    'app',
    'public',
    'styles',
    'docs',
    'scripts'
]

files_to_scan = [
    'package.json',
    'README.md',
    'PROJECT.md',
    'FAQ.md',
    'CONTRIBUTING.md',
    'CHANGES.md',
    'Dockerfile',
    'docker-compose.yaml',
    'electron-builder.yml',
    'electron-update.yml',
    'uno.config.ts',
    'vite.config.ts',
    'vite-electron.config.ts'
]

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Skipping {filepath}: {e}")
        return

    # specific replacements
    new_content = content.replace('bolt.diy', 'auricyn')
    new_content = new_content.replace('bolt.new', 'auricyn.new')
    new_content = new_content.replace('Bolt.new', 'Auricyn.new')
    new_content = new_content.replace('Bolt.DIY', 'Auricyn')
    new_content = new_content.replace('Bolt.diy', 'Auricyn')
    
    # general replacements
    new_content = new_content.replace('bolt', 'auricyn')
    new_content = new_content.replace('Bolt', 'Auricyn')
    new_content = new_content.replace('BOLT', 'AURICYN')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    base_dir = r"c:\Users\hp\Downloads\bolt.diy-main\bolt.diy-main"
    
    # Process specific files
    for file in files_to_scan:
        path = os.path.join(base_dir, file)
        if os.path.exists(path):
            replace_in_file(path)
            
    # Process directories
    for directory in directories_to_scan:
        dir_path = os.path.join(base_dir, directory)
        if os.path.exists(dir_path):
            for root, dirs, files in os.walk(dir_path):
                # skip node_modules
                if 'node_modules' in dirs:
                    dirs.remove('node_modules')
                for file in files:
                    if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html', '.css', '.scss', '.sh', '.yml', '.yaml')):
                        path = os.path.join(root, file)
                        replace_in_file(path)

if __name__ == '__main__':
    main()
