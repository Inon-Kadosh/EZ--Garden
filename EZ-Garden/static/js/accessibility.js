let fontSize = 16; // גודל פונט ברירת מחדל

// פונקציה להגדלת גודל הפונט
function toggleFontSize() {
    fontSize += 2; // הגדלה ב-2 פיקסלים
    document.documentElement.style.fontSize = `${fontSize}px`;
}

// פונקציה להחלפת ערכת הנושא
function setTheme(theme) {
    // הסרת כל המחלקות הקשורות לערכות נושא
    document.body.classList.remove('dark-mode', 'light-mode');

    if (theme === 'dark') {
        // הפעלה של מצב כהה
        document.body.classList.add('dark-mode');
    } else if (theme === 'light') {
        // הפעלה של מצב בהיר
        document.body.classList.add('light-mode');
    }
}

// פונקציה לאיפוס כל ההגדרות
function resetAccessibility() {
    // איפוס גודל הפונט
    fontSize = 16;
    document.documentElement.style.fontSize = '';

    // איפוס ערכות הנושא
    document.body.classList.remove('dark-mode', 'light-mode');

    // החזרת ברירת המחדל של הרקע והטקסט
    document.body.style.background = 'linear-gradient(90deg, #7fd4bb, #b9e2a8, #7fd4bb)';
    document.body.style.color = '#333';

    // הסרת אנימציות אם קיימות
    document.body.style.animation = 'backgroundAnimation 10s ease infinite';
}
