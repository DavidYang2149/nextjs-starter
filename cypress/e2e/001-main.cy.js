describe('메인 페이지', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit('http://localhost:3000');
  });

  describe('메인 페이지에서', () => {
		it('메인 화면을 확인합니다', () => {
			cy.contains('Hello world!');
		});
  });
});
