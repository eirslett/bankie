[![Build Status](https://travis-ci.org/eirslett/bankie.svg?branch=master)](https://travis-ci.org/eirslett/bankie)

# Bankie

This tool calculates IBAN bank account numbers.

##### Supported countries

Only Norway is supported yet. (Support for other countries should be added!)

### Usage

##### Installation

```
npm install bankie
```

##### How does it generally work?

This is the general flow:

1) You provide Bankie with a country code (for example "NO" for Norway)
2) Bankie will give you a set of fields that are required input. These fields
   may vary between countries. For example, Norway only requires a bank account number,
   while a US account (though not supported yet) would also require a routing number.
3) You give Bankie these required inputs + the country code, and it
   returns data; for example a IBAN number, and maybe some metadata about
   the bank that the account belongs to.

##### Do you have any API documentation?

Look at the unit tests (for example `test/norwegian-test.js`),
they show you how the package should be used.

### Contributing

Feel free to add support for more countries!
Follow the directions of the project; add unit tests,
and the code should be formatted according to the
[standard style guide](https://standardjs.com/).

If you want to add other features than additional
country support, I suggest that you open a GitHub issue
first, to discuss it.

##### Development

Here are some common commands:

```
# Build
npm run build

# Run tests
npm run mocha

# Run lint
npm run lint
```

Some resources/datasets are stored in the resources/ directory.
These can be processed by build scripts inside the build/ directory,
for example to convert xls/csv files to JSON.