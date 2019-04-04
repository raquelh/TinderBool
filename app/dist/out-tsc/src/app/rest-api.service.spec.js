import { TestBed } from '@angular/core/testing';
import { RestApiService } from './rest-api.service';
describe('RestApiService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RestApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rest-api.service.spec.js.map