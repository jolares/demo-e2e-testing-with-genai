const fs = require('node:fs');

if (`${process.env.CI}` != `true`) {
    const envFile = './.env.local';
    try {
        if (!fs.existsSync(envFile)) {
            content = [
                "OPENAI_API_KEY=''"
            ].join('\n');
            fs.writeFileSync('.env.local', content);
        }
    } catch (err) {
      console.error(err);
    }
}