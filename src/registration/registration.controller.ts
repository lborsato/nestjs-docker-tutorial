import { Controller, Get, Param } from '@nestjs/common';
import { RegistrationService } from '../services/registration/registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private quotesService: RegistrationService) {}
}
