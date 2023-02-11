const expected = {
    'b1/b1.css': [
        '.b1 { color: red; color: green; }',
        '.b1 { animation-name: test; }',
        '.b1.b2 { color: yellowgreen; }',
        '@media (max-width: 1250px) {',
        '    .b1 { width: 50%; }',
        '}',
        '.b1 { color: pink; }',
        '.b1:hover { color: brown; }',
    ].join('\n'),
    'b2/b2.css': [
        '@media (max-width: 1250px) {',
        '    .b2 { width: 75%; }',
        '}',
        '.b2 { color: pink; }',
        '.b2 { color: green; }',
    ].join('\n'),
    'b1/__e1/b1__e1.css': [
        '.b1__e1 { color: yellow; }',
        '.b1__e1::after { content: ""; }',
    ].join('\n'),
    'b1/_m1/b1_m1.css': '.b1_m1 { color: honeydew; }',
    'b1/_m1/b1_m1_v1.css': '.b1_m1_v1 { color: lightcoral; }',
    'b1/_m1/b1_m1_v2.css': '.b1_m1_v2 .b1__e1 { color: hotpink; }',
    'b2/__e1/_m1/b2__e1_m1.css': '.b2__e1_m1 { color: #eee; }'
}

module.exports = expected;
