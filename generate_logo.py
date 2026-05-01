from PIL import Image, ImageDraw

def create_logo():
    # Settings
    size = (1024, 1024)
    bg_color = (0, 0, 0)
    logo_color = (255, 255, 255)
    
    # Create image
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    
    # Scale coordinates for 1024x1024
    # The A shape
    # Points: Peak, bottom right outer, bottom right inner, bottom left inner, bottom left outer
    a_path = [
        (512, 150),   # Peak
        (800, 850),   # Bottom right outer
        (700, 850),   # Bottom right inner
        (512, 350),   # Peak inner
        (324, 850),   # Bottom left inner
        (224, 850),   # Bottom left outer
    ]
    draw.polygon(a_path, fill=logo_color)
    
    # The sharp slash
    # Points: Top left of slash, top right, bottom right, bottom left
    slash_path = [
        (200, 550),   # Left start
        (850, 400),   # Right end top
        (820, 480),   # Right end bottom
        (230, 630),   # Left end bottom
    ]
    draw.polygon(slash_path, fill=logo_color)

    # Add jagged detail on the right leg (as seen in image)
    jagged_path = [
        (580, 250),
        (650, 350),
        (590, 330)
    ]
    draw.polygon(jagged_path, fill=logo_color)
    
    # Save as WebP
    img.save('public/logo.webp', 'WEBP', quality=95)
    print("Logo saved to public/logo.webp")

if __name__ == "__main__":
    create_logo()
