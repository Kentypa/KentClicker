# Kent Clicker

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) to install all dependencies.

### Clone repository

```bash
git clone https://github.com/Kentypa/KentClicker
cd KentClicker
```

### Install Frontend Dependencies

```bash
cd apps/frontend
yarn install
```

### Install Backend Dependencies

```bash
cd .../backend
yarn install
```

### Docker

Install [docker](https://www.docker.com/products/docker-desktop/) into system

## Usage

To run project write from main directory

```bash
docker-compose up
```

To close project write from main directory

```bash
docker-compose down
```

## Project Structure

```bash
KentClicker/
├── apps/
│   ├── frontend/   # React
│   └── backend/    # NestJS
├── docker-compose.yml
└── README.md
```
