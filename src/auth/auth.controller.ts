import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  auth() {
    const tiempo = Date.now();
    console.log('- - Ejecuta funcion auth() - -', tiempo);
    return 'dentro de auth <script>console.log("Ejecuta funcion auth()")</script>';
  }
}
