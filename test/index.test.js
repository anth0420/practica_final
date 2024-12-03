const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('HTML Content', () => {
    it('should contain "¡Hola Mundo!"', () => {
        expect(html).toContain('<h1>¡Hola Mundo!</h1>');
    });
});
