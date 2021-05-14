const userComponent = `
<div class="users">
	<div class="flex-row">
		<div class="form-item" style=" width: 40%">
			<label for="rua">Nome</label>
			<input type="text" name="rua" id="rua">
		</div>
		<div class="form-item" style=" width: 20%">
			<label for="nascimento">Data de Nascimento</label>
			<input type="date" name="nascimento" id="nascimento">
		</div>
	<div class="form-item" style="width: 25%">
			<label for="parentesco">Parentesco</label>
			<select name="parentesco" id="parentesco">
				<option>Responsável Familiar</option>
				<option value="rf">Responsável Familiar</option>
				<option value="parent">Pai ou mãe</option>
				<option>Responsável Familiar</option>
			</select>
		</div>
	</div>
	<div class="flex-row">
		<div class="form-item" style="width: 15%">
			<label for="sexo">Sexo</label>
			<select name="sexo" id="sexo">
				<option>Selecione</option>
				<option value="masculino">Masculino</option>
				<option value="feminino">Feminino</option>
				<option value="outro">Outro</option>
			</select>
		</div>
		<div class="form-item" style=" width: 20%">
			<label for="nis">NIS</label>
			<input type="text" name="nis" id="nis">
		</div>
		<div class="form-item" style=" width: 20%">
			<label for="cpf">CPF</label>
			<input type="text" name="cpf" id="cpf">
		</div>
	</div>
	<div class="flex-row">
		<div class="form-item" style="width: 40%">
			<label for="mae">Nome da mãe</label>
			<input type="text" name="mae" id="mae">
		</div>
	</div>
</div>
<hr style="border-color: #089a85">
`;

