// CreateCatDto: Data Transfer Object for creating a new cat
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

// UpdateCatDto: Data Transfer Object for updating a cat
export class UpdateCatDto {
  readonly name?: string;
  readonly age?: number;
  readonly breed?: string;
}

// ListAllEntities: Data Transfer Object for querying multiple cats
export class ListAllEntities {
  readonly limit: number;
  readonly page: number;
}
