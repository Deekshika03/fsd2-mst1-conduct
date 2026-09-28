question is :
     Post Composer with Validation

Create a simple Post Composer in React that:
- Contains a textarea for entering a post.
- Allows the user to select Twitter or LinkedIn.
- Applies a character limit of 280 for Twitter and 3000 for LinkedIn.
- Displays an error message when the limit is exceeded.
- Displays the current character count.


solution:

React mein ek Post Composer jo Twitter aur LinkedIn ke liye character limit check karta hai.


Concepts used :

useState — platform aur text track karne ke liye

Derived values — characterCount, characterLimit, isOverLimit

Conditional rendering — {isOverLimit && <p>error</p>}

onChange — har keystroke pe text update

Inline styles — basic styling ke liye


Files:

PostComposer.js — main component

App.js — PostComposer ko render karta hai

index.js — React 19 ke liye createRoot fix kiya




