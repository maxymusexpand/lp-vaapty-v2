import sys
import re

active_file = r'c:\Users\User\Desktop\forms active\forms-active.html'
with open(active_file, 'r', encoding='utf-8') as f:
    active_html = f.read()

target_file = r'c:\Users\User\Desktop\forms active\forms-ac-jg.html'
with open(target_file, 'r', encoding='utf-8') as f:
    target_html = f.read()

# 1. Replace styles
style_pattern = re.compile(r'<style>.*?</style>', re.DOTALL)
active_styles = ''.join(style_pattern.findall(active_html))
target_html = style_pattern.sub('', target_html)  # remove all styles
target_html = active_styles + '\n' + target_html.lstrip()

# 2. Add sitelink-form class
target_html = target_html.replace('class="_form _form_9 _inline-form  _dark"', 'class="_form _form_9 _inline-form _dark sitelink-form"')

# 3. Replace field 27 HTML
# In Active it's a select
f27_pattern_active = re.compile(r'<div class="_form_element _x17853312 _full_width.*?</div>\s*</div>', re.DOTALL)
f27_match = f27_pattern_active.search(active_html)

f27_pattern_target = re.compile(r'<div class="_form_element _x17853312 _full_width.*?</div>\s*</div>', re.DOTALL)
if f27_match:
    target_html = f27_pattern_target.sub(f27_match.group(0), target_html)

# 4. Replace field 7 HTML
# In Active it's radio buttons
f7_pattern_active = re.compile(r'<div class="_form_element _x53901316 _full_width.*?</div>\s*</div>', re.DOTALL)
f7_match = f7_pattern_active.search(active_html)

f7_pattern_target = re.compile(r'<div class="_form_element _x53901316 _full_width.*?</div>\s*</div>', re.DOTALL)
if f7_match:
    target_html = f7_pattern_target.sub(f7_match.group(0), target_html)

# 5. Add privacy policy checkbox before button wrapper
privacy_pattern = re.compile(r'<div class="_form_element _full_width">\s*<div class="_field-wrapper">\s*<label.*?Termos de Privacidade.*?</div>\s*</div>', re.DOTALL)
privacy_match = privacy_pattern.search(active_html)
if privacy_match:
    if 'Termos de Privacidade' not in target_html:
        target_html = target_html.replace('<div class="_button-wrapper _full_width">', privacy_match.group(0) + '\n<div class="_button-wrapper _full_width">')

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(target_html)

print("File updated successfully!")
