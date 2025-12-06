from playwright.sync_api import Page, expect, sync_playwright

def verify_landing_page(page: Page):
    # Go to the local dev server
    page.goto("http://localhost:5173")

    # Verify key elements
    expect(page.locator(".navbar")).to_be_visible()
    expect(page.locator(".hero")).to_be_visible()
    expect(page.locator(".user-ticker-container")).to_be_visible()
    expect(page.locator(".que-es")).to_be_visible()
    expect(page.locator(".join-revolution")).to_be_visible()
    expect(page.locator(".footer")).to_be_visible()

    # Check for text content
    expect(page.get_by_text("Invierte en Personas")).to_be_visible()
    expect(page.get_by_text("SocialStock no es solo una red social")).to_be_visible()

    # Take screenshot
    page.screenshot(path="/home/jules/verification/landing_page_verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_landing_page(page)
        finally:
            browser.close()
