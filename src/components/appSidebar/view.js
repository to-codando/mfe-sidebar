export default ({ html, css }) => {
  const template = () => html`
    <div class="ctx-wrapper">
      <div data-component="header"></div>
      <dl>
        <dt><span class="material-symbols-rounded"> account_circle </span> Usuários</dt>
        <dd>
          <a href="#/user/creator">
            <span class="material-symbols-rounded"> chevron_right </span>
            Cadastrar usuário
          </a>
        </dd>
        <dd>
          <a href="#/user/viewer">
            <span class="material-symbols-rounded"> chevron_right </span>
            Usuários cadastrados
          </a>
        </dd>
      </dl>
      <dl>
        <dt><span class="material-symbols-rounded"> chart_data </span> Projetos</dt>
        <dd>
          <a href="#/project/creator">
            <span class="material-symbols-rounded"> chevron_right </span>
            Cadastrar projeto
          </a>
        </dd>
        <dd>
          <a href="#/project/viewer">
            <span class="material-symbols-rounded"> chevron_right </span>
            Projetos cadastrados
          </a>
        </dd>
      </dl>
    </div>
  `

  const styles = () => css`
    [scope],
    .ctx-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      height: 100%;
    }

    .ctx-wrapper {
      background: #fff;
      max-width: 250px;
      flex-direction: column;
      border-right: 1px #ebebeb solid;
    }

    [scope] dl,
    [scope] dt,
    [scope] dd,
    [scope] dd > a {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
    }

    [scope] dl {
      font-size: 1em;
      color: #675f7c;
      padding: 0 0 2em 0;
    }

    [scope] dl:first-of-type {
      padding-top: 1em;
    }

    [scope] dl + dl {
      border-top: 1px #ebebeb solid;
      padding-top: 1em;
    }

    [scope] dt {
      padding: 1em 1em 0.5em 1em;
      font-weight: 600;
    }

    [scope] dd > a {
      padding: 0.5em 1em 0.5em 1em;
      font-size: 0.875em;
      font-weight: 400;
      transition: all ease-in-out 0.5s;
    }

    [scope] dd > a:hover {
      background: #e9e6f1;
    }

    [scope] span {
      font-size: 1.2em;
      position: relative;
      top: -2px;
      margin-right: 5px;
    }
  `

  return { template, styles }
}
