## Deployed Todo App
https://worthy-winnie-liiiiiu-3d18c884.koyeb.app/

## Deskripsi
Aplikasi Todo App ini adalah web service berbasis RESTful API yang memungkinkan pengguna untuk mengelola Todo list.


## Fitur
- GET semua todo
- GET todo berdasarkan ID
- POST todo baru
- PUT untuk mengupdate todo berdasarkan ID
- DELETE semua todo
- DELETE todo berdasarkan ID
- Autentikasi pengguna (Registrasi & Login)

## Autentikasi

### Registrasi
- Endpoint: `/auth/register`
- Method: `POST`
- Body:
  - `username` (String): Nama pengguna.
  - `password` (String): Kata sandi.
  - Contoh Body:
    
    {
      "username": "user001",
      "password": "111"
    }
    
- Response:
  - Status Code: `201 Created`
  - Contoh Response:
    
    {
      "message": "berhasil regis"
    }
    

### Login
- Endpoint: `/auth/login`
- Method: `POST`
- Body:
  - `username` (String): Nama pengguna.
  - `password` (String): Kata sandi.
  - Contoh Body:
    
    {
      "username": "user001",
      "password": "111"
    }
    
- Response:
  - Status Code: `200 OK`
  - Contoh Response:
    
    {
      "message": "berhasil login",
      "token": "jwt-token-here"
    }
    
- Token yang dihasilkan dapat digunakan untuk otentikasi di endpoint yang membutuhkan akses yang dilindungi.


## Endpoint

### 1. Mendapatkan Semua Todo
- Endpoint: `/`
- Method: `GET`
- Response: 
  - Status Code: `200 OK`
  - Contoh Response:
    
    {
      "message": "Berhasil mengambil semua Todos",
      "data": [
        {
          "_id": "612e7c8a3f5a4c47c8bda0f0",
          "todo": "Belajar React",
          "status": false
        },
        {
          "_id": "612e7c8a3f5a4c47c8bda0f1",
          "todo": "Membuat API",
          "status": true
        }
      ]
    }
    

### 2. Mendapatkan Todo Berdasarkan ID
- Endpoint: `/:id`
- Method: `GET`
- Parameter: 
  - `id` (String): ID dari todo yang ingin diambil.
- Response: 
  - Status Code: `200 OK` jika todo ditemukan.
  - Status Code: `404 Not Found` jika todo tidak ditemukan.
  - Contoh Response:
    
    {
      "message": "Berhasil mengambil todo by id",
      "data": {
        "_id": "612e7c8a3f5a4c47c8bda0f0",
        "todo": "Belajar React",
        "status": false
      }
    }
    

### 3. Menambah Todo Baru
Endpoint: `/`
Method: `POST`
Body:
  - `todo` (String): Nama tugas.
  - `status` (Boolean): Status apakah tugas sudah selesai atau belum.
  - Contoh Body:
    
    {
      "todo": "Pelajari HTML CSS",
      "status": false
    }
    
- Response: 
  - Status Code: `201 Created`
  - Contoh Response:
    
    {
      "message": "Todo berhasil dibuat"
    }
    

### 4. Mengupdate Todo Berdasarkan ID
- Endpoint: `/:id`
- Method: `PUT`
- Parameter: 
  - `id` (String): ID dari todo yang ingin diupdate.
- Body:
  - `todo` (String): Nama tugas.
  - `status` (Boolean): Status apakah tugas sudah selesai atau belum.
  - Contoh Body:
    
    {
      "todo": "Update tugas",
      "status": true
    }
    
- Response: 
  - Status Code: `200 OK` jika todo berhasil diupdate.
  - Status Code: `404 Not Found` jika todo tidak ditemukan.
  - Contoh Response:
    
    {
      "message": "Todo berhasil di update"
    }
    

### 5. Menghapus Semua Todo
- Endpoint: `/`
- Method: `DELETE`
- Response: 
  - Status Code: `200 OK`
  - Contoh Response:
    
    {
      "message": "Semua todos berhasil dihapus"
    }
    

### 6. Menghapus Todo Berdasarkan ID
- Endpoint: `/:id`
- Method: `DELETE`
- Parameter: 
  - `id` (String): ID dari todo yang ingin dihapus.
- Response: 
  - Status Code: `200 OK` jika todo berhasil dihapus.
  - Status Code: `404 Not Found` jika todo tidak ditemukan.
  - Contoh Response:
    
    {
      "message": "Todo berhasil dihapus"
    }
    


