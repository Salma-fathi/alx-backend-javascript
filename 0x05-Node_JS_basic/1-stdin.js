process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  
  if (input !== null) {
    const name = input.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    
    if (process.stdin.isPaused()) {
      process.stdout.write('This important software is now closing\n');
      process.exit();
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
