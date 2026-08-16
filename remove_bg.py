from PIL import Image
import sys

def remove_black_bg(input_path, output_path, threshold=30):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # If the pixel is very dark (close to black), make it transparent
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

remove_black_bg("images/x+ve.jpg", "public/hero-person.png")
