# Copilot instructions — WebShop (Django + React)

This repository contains a small WebShop with a Django backend under `backend/` and a React frontend under `frontend/`.
Use these notes to get productive quickly and to avoid making incorrect assumptions (several files are incomplete).

Key locations
- `backend/` — Django project (entrypoint: `backend/manage.py`).
- `backend/webshop/settings.py` — Django settings (CORS, installed apps).
- `backend/shop/` — main app: `models.py`, `serializers.py`, `views.py`, `urls.py`, `populate_db.py`.
- `backend/requirements.txt` — minimal Python deps (django, djangorestframework, django-cors-headers).
- `frontend/` — React UI. Entry points: `frontend/index.js`, `frontend/App.js`; UI pieces in `frontend/components/` and pages in `frontend/pages/`.

Big-picture architecture
- Backend: Django REST API (DRF). The `shop` app models represent marketplace items (see `backend/shop/models.py`).
- Frontend: React app that consumes the backend REST API. Components live in `frontend/components/` and page-level containers in `frontend/pages/`.
- Integration: frontend issues HTTP requests to Django endpoints (check `backend/webshop/settings.py` for CORS settings).

Developer workflow (assumptions)
- Assumes Python 3.x and Node.js are installed. `package.json` is currently missing/empty; confirm frontend scripts before running the UI server.
- PowerShell (Windows) example to start backend and frontend (adjust if you use a different shell):

```powershell
# Backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r backend/requirements.txt
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 8000

# Frontend (if using create-react-app or similar)
cd ..\frontend
npm install
npm start
```

Project-specific notes and gotchas (do not assume these are implemented)
- Many files are currently empty or have placeholder content. Before running migrations, inspect and fix `backend/shop/models.py` — it includes obvious typos in imports and class definition (e.g. `djantgo` → `django`, `User` import, `models.Model` syntax, `modles.CharField`).
- `backend/shop/serializers.py`, `views.py`, and `urls.py` are present but empty: add DRF serializers/views/viewsets and wire them into `backend/webshop/urls.py` (include `shop.urls`).
- `backend/shop/populate_db.py` is available for seeding but currently empty; confirm expected fixtures or implement script if you need sample data.

Concrete examples to follow
- Naming: model `Item` → serializer `ItemSerializer` → view/viewset `ItemViewSet` → route e.g. `api/items/`.
- When adding API endpoints, prefer DRF viewsets + routers in `backend/shop/urls.py` so the frontend can hit conventional REST endpoints.

When editing code
- Run small iterative changes, migrate frequently, and test endpoints with curl/Postman.
- Fix the `Item` model typos before creating migrations. Example corrections live in `backend/shop/models.py`.

Files to inspect first when implementing a feature
- `backend/shop/models.py` — canonical data model (Item, seller, buyer, status).
- `backend/shop/serializers.py` — where object → JSON mapping should live.
- `backend/shop/views.py` — implement API logic here.
- `frontend/pages/shop.js` and `frontend/components/Item.js` — where the UI renders items and issues network requests.

If any instruction is unclear, or if you want me to open and fix the noted typos and wire a minimal working backend→frontend example (API + fetch + seed data), tell me and I will implement it next.
