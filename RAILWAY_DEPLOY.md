# Guia de Deploy no Railway

## Pré-requisitos
- Conta no Railway (railway.app)
- Railway CLI instalado
- Git instalado

## Passos para Deploy

### 1. Instalar Railway CLI
```bash
npm i -g @railway/cli
```

### 2. Login no Railway
```bash
railway login
```

### 3. Criar Novo Projeto no Railway
```bash
railway init
```
- Escolha "Create a new project"
- Dê um nome ao projeto (ex: "ars-menu")

### 4. Configurar Variáveis de Ambiente (Opcional)
```bash
railway variables
```

### 5. Deploy
```bash
railway up
```

### 6. Obter URL do Projeto
Após o deploy, execute:
```bash
railway open
```

Ou aceda a: https://railway.app/dashboard

A URL será algo como: `https://ars-menu-production.up.railway.app`

## Informações Importantes

- **Build Command**: `pnpm build`
- **Start Command**: `npm run start`
- **Port**: 3000 (automático)
- **Node Version**: 22.13.0

## Troubleshooting

### Erro de Build
Se tiver problemas com dependências:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Verificar Logs
```bash
railway logs
```

### Redeploy
```bash
railway up --detach
```

## Próximos Passos
1. Após deploy, copie a URL gerada
2. Gere um novo código QR com essa URL
3. Imprima o código QR para os clientes

---
**Nota**: O projeto usa pnpm. Railway detectará automaticamente e instalará as dependências corretas.
